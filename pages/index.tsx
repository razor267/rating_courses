import React, {useEffect, useState} from "react";
import {Htag} from "../components/Htag/Htag";
import {Button, P, Rating, Tag} from "../components";

export default function Home(): JSX.Element {

    const [rating, setRating] = useState<number>(4);

    return (
        <>
            <Htag tag='h1'>Заголовок</Htag>
            <Button appearance='primary' arrow='right'>Кнопка</Button>
            <Button appearance='ghost' arrow='down'>Кнопка</Button>
            <P size='l'>Большой</P>
            <P>Средний</P>
            <P size='s'>Маленький</P>
            <Tag size='m' color='green'>Мал</Tag>
            <Tag color='red'>red</Tag>
            <Tag color='green'>green</Tag>
            <Tag color='gray'>gray</Tag>
            <Tag color='primary' size='m'>primary</Tag>
            <Tag color='ghost'>ghost</Tag>
            <Rating rating={rating} isEditable setRating={setRating}/>
        </>
    );
}
