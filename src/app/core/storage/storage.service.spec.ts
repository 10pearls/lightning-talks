import { TestBed } from '@angular/core/testing';
import { LOCAL_STORAGE, StorageServiceModule } from 'ngx-webstorage-service';

import { StorageService } from './storage.service';
import { SERVICE_STORAGE } from '../../constants/storage.constant';

describe('StorageService', () => {
  const selectedStorage = localStorage;
  let service: StorageService = null;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      StorageServiceModule,
    ],
    providers: [
      {
        provide: SERVICE_STORAGE,
        useExisting: LOCAL_STORAGE,
      },
    ],
  }));

  beforeEach(() => {
    selectedStorage.clear();
    service = TestBed.get(StorageService);
  });

  it('Service should be created', () => {
    expect(service).toBeTruthy();
  });

  it('SET should be able to set basic key, value pair', () => {
    const key = 'test';
    const value = 'present';
    service.set(key, value);

    expect(selectedStorage.getItem(key)).toBe(`"${value}"`);
  });

  it('SET should be able to should be able to set objects', () => {
    const key = 'test';
    const value = {a: 'foo', b: 'bar'};
    service.set(key, value);

    expect(selectedStorage.getItem(key)).toBe('{"a":"foo","b":"bar"}');
  });

  it('GET should be able to should be able to retrieve an item', () => {
    const key = 'test';
    const value = '"present"';
    selectedStorage.setItem(key, value);

    expect(service.get(key)).toBe('present');
  });

  it('GET should return undefined if key doesn\'t exist', () => {
    const key = 'test';

    expect(service.get(key)).toBeUndefined();
  });

  it('HAS should return true if key exists', () => {
    const key = 'test';
    const value = '"present"';
    selectedStorage.setItem(key, value);

    expect(service.has(key)).toBeTruthy();
  });

  it('HAS should return false if key doesn\'t exist', () => {
    const key = 'test';

    expect(service.has(key)).toBeFalsy();
  });

  it('REMOVE should remove key item from storage', () => {
    const key = 'test';
    const value = '"present"';
    selectedStorage.setItem(key, value);

    service.remove(key);

    expect(selectedStorage.getItem(key)).toBeNull();
  });

  it('REMOVE should not fail if key doesn\'t exist', () => {
    const key = 'test';
    service.remove(key);

    expect(selectedStorage.getItem(key)).toBeNull();
  });

  it('CLEAR should clear all keys from storage', () => {
    selectedStorage.setItem('a', 'a');
    selectedStorage.setItem('b', 'b');
    selectedStorage.setItem('c', 'c');

    service.clear();

    expect(selectedStorage.length).toBe(0);
  });

});
