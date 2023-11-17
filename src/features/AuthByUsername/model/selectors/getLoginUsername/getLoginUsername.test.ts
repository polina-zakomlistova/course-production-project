import {DeepPartial} from "@reduxjs/toolkit";
import {StateSchema} from "app/providers/StoreProvider";

import {getLoginUsername} from "./getLoginUsername";

describe('getLoginUsername.test', () => {
    test('should return username', () => {
        const state: DeepPartial<StateSchema> = {
            login:{
                username:'123w'
            }

        }
        expect(getLoginUsername(state as StateSchema)).toEqual('123w');
    });

    test('work with empty state. Should return ""', () => {
        const state: DeepPartial<StateSchema> = {

        }
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });

});
