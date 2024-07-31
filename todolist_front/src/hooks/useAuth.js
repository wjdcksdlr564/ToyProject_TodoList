import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { authStateAtom, authUserStateAtom } from '../atoms/AuthAtom';
import { getAuthentication } from '../apis/authApi';

function useAuth() {
    const [ authState, setAuthState ] = useRecoilState(authStateAtom);
    const [ authUserState, setAuthUserState ] = useRecoilState(authUserStateAtom);

    const checkAuthentication = async () => {
        const response = await getAuthentication();

        // const response = {
        //     status: 200
        // }

        console.log(response);

        if(response.status === 200) {
            setAuthUserState(response.data);
        }else {
            setAuthUserState(null);
        }
    }

    useEffect(() => {
        checkAuthentication();
    }, [authState]);
}

export default useAuth;