import Server from './server'
import {getUrlConcat} from '../common/js/common'
import {_axios} from "./server";

export const login = async function (data) {
  let result = await _axios('post', 'user/api/login', data)
  console.log(result, 'result')
}
