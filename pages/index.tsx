import React, {useState} from "react";
import {Htag} from "../components/Htag/Htag";
import {Button, P, Rating, Tag} from "../components";
import {withLayout} from "../layout/Layout";
import {GetStaticProps} from "next";
import axios from "axios";
import {MenuItem} from "../interfaces/menu.interface";

function Home({menu}: HomeProps): JSX.Element {

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
            <ul>
                {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
            </ul>
        </>
    );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {

    const firstCategory = 0;
    const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    });

    return {
        props: {
            menu,
            firstCategory
        }
    };
};

interface HomeProps extends Record<string, unknown> {
    menu: MenuItem[],
    firstCategory: number;
}
