import React from "react";
import {Htag} from "../components/Htag/Htag";
import {Button} from "../components";

export default function Home(): JSX.Element {
    return (
        <>
            <Htag tag='h1'>Текст</Htag>
            <Button appearance='primary'>Кнопка</Button>
            <Button appearance='ghost'>Кнопка</Button>
        </>
    );
}
