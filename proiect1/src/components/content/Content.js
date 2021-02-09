import React from "react";
import { Post,Title, Ul } from "./Content.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Content = () => {
    return (
        <Post>
            <Title>
                <h1>Menu</h1>
                <Ul>
                    <li>Hot Coffees</li>
                    <li>Cold Coffees</li>
                    <li>Hot Teas</li>
                    <li>Iced Teas</li>
                </Ul>
            </Title>
        </Post>
    )
}


export default Content;