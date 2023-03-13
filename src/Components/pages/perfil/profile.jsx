import React from "react";
import HomeRoutes from "../../Home_Routes/home_routes";
import * as S from "./profile_style.js"
export default function Profile(){
    return(
        <>
       <HomeRoutes/>
        <S.MainProfile>
            <S.UserProfile>
                <S.UserInfoBox>

                </S.UserInfoBox>
                <S.UserProducts>

                </S.UserProducts>
            </S.UserProfile>
        </S.MainProfile>
        </>
    )
}