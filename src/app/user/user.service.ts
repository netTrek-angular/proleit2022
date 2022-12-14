import { Injectable } from '@angular/core';
import {User} from "./user";
import {BehaviorSubject, distinctUntilChanged, map, Observable, tap} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {keyframes} from "@angular/animations";

enum MyEnum {
  Saban,
  Frank
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly myEnumKeys = Object.keys( MyEnum );
  readonly myEnumValues = Object.values( MyEnum );
  readonly myEnumList = Object.entries(MyEnum).slice( -2 ); // für string enums
  readonly myEnumKeyVal = this.myEnumList.map(([key, value]) => ({ key, value }))

  userList: User[] = [];

  allTasks$ : BehaviorSubject<User[]> = new BehaviorSubject<User[]>( []);
  // backlog$ = this.allTasks$.pipe(
  //   map ( list => list.filter( task => task.id === 0 )),
  //   distinctUntilChanged ()
  // );

  typerMap: Map <number, Observable<User[]>> = new Map()

  getTasksByType ( type: number ): Observable<User[]> {
    let b$ = this.typerMap.get( type );
    if ( !b$ ) {
      b$ = this.allTasks$.pipe(
        map ( list => list.filter( task => task.id === type )),
        distinctUntilChanged ()
      );
      this.typerMap.set( type, b$ );
    }
    return b$;
  }

  selectedUsr$: BehaviorSubject<User | undefined> = new BehaviorSubject<User | undefined>( undefined );
  constructor( private readonly http: HttpClient ) {
    debugger
    this.init();
  }
  setSelectedUser(usr: User) {
    const crrUsr = this.selectedUsr$.value;
    this.selectedUsr$.next( usr.id === crrUsr?.id ? undefined : usr );
  }
  delSelectedUsr (){
    if ( this.selectedUsr$.value?.id ) {
      this.deleteUser( this.selectedUsr$.value?.id ).subscribe( () => {
        this.update();
        this.selectedUsr$.next( undefined );
      } )
    }
  }

  deleteUser ( id: number ): Observable<Object> {
    return this.http.delete( `${environment.api}/${id}` );
  }

  createUsr ( usr: User ) {
    return this.http.post<User>( environment.api, usr ).pipe(
      tap (
        {
          complete: () => this.update()
        }
      )
    )
  }

  updateUsr ( usr: User ) {
    return this.http.put<User>( `${environment.api}/${usr.id}`, usr ).pipe(
      tap (
        {
          complete: () => this.update()
        }
      )
    )
  }

  getUsersByName (name: string ): Observable<User[]> {




    // let params : HttpParams = new HttpParams( ).set( 'name', name );
    let params : HttpParams = new HttpParams( {fromObject: {name, birthday: '11-06-1999'}});
    return this.http.get<User[]>( `${environment.api}`, { params } ).pipe(
      map ( userList => userList.map( user => {
        this.serializeUser(user);
        return user;
      }) ),
    )
  }

  getUser (id: number ): Observable<User> {
    return this.http.get<User>( `${environment.api}/${id}` ).pipe(
      map ( user => this.serializeUser( user) )
    )
  }

  getUsers () {

    return this.http.get<User[]>( environment.api )
      .pipe(
        // map ( userList => userList.map( user => ({...user, birthday: new Date (user.birthday as any)})) ),
        map ( userList => userList.map( user => {
          this.serializeUser(user);
          return user;
        }) ),
        tap ( userlist => this.userList = userlist ),
      );
  }
  private init() {
    this.update();
  }

  private update() {
    console.log('update')
    this.getUsers().subscribe();
  }

  private serializeUser(user: User) {
    if (user.birthday && typeof user.birthday === 'string') {
      user.birthday = new Date(user.birthday);
    }
    return user;
  }
}
