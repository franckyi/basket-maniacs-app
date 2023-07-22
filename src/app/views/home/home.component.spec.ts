import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { of } from 'rxjs';
import { GamesService } from 'src/app/services/games.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    const apiServiceSpy = jasmine.createSpyObj(['getLastGames']);
    apiServiceSpy.getLastGames.and.returnValue(of([]));
    
    const apiServiceSpy = jasmine.createSpyObj(['getLastGames']);
    apiServiceSpy.getLastGames.and.returnValue(of([]));
    
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [ {provide: GamesService, useValue: apiServiceSpy} ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
