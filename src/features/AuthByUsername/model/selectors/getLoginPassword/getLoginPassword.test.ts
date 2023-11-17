import {DeepPartial} from "@reduxjs/toolkit";
import {StateSchema} from "app/providers/StoreProvider";

import {getLoginPassword} from "./getLoginPassword";

describe('getLoginPassword.test', () => {
    test('should return password', () => {
        const state: DeepPartial<StateSchema> = {
            login:{
                password:'123q'
            }

        }
        expect(getLoginPassword(state as StateSchema)).toEqual('123q');
    });

    test('work with empty state. Should return ""', () => {
        const state: DeepPartial<StateSchema> = {

        }
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });

});
