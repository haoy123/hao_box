import request from '@/utils/request';
import {user} from './api';

export async function query() {
  return request(user.query);
}

export async function queryCurrent() {
  return request(user.queryCurrent);
}
