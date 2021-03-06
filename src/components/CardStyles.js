import styled from 'styled-components';

import { Add } from "@styled-icons/fluentui-system-filled";
import { Play } from '@styled-icons/boxicons-regular';
import { ThumbLike, ThumbDislike } from '@styled-icons/fluentui-system-regular';
import { ThumbLike as ThumbLikeFill, ThumbDislike as ThumbDislikeFill } from '@styled-icons/fluentui-system-filled';
import { Check2 } from "@styled-icons/bootstrap";

import { KeyboardArrowDown } from '@styled-icons/material';

export const Card = styled.div`

    --scale: 1.3;
    --translateX: 75px;
    --translateY: -50px;
    --margin-sides: 5px;
    --margin-vertical: 0;

    cursor: pointer;

    color: ${ props => console.log(props)};

    border-radius: 5px;

    display: flex;
    flex-direction: column;
    margin: var(--margin-vertical) var(--margin-sides);
    
    min-width: 300px;

    transform: scale(1.0);
    position: relative;
    transition: transform 0.5s cubic-bezier(.25,.8,.25,1), box-shadow 0.1s;
    transition-delay: 0s;

    > .descrip {

        margin-top: -1px;
        display: flex;
        flex-direction: column;
        
        background-color: rgb(20, 20, 20);

        height: 0px;

        visibility: hidden;
        opacity: 0;
        transition: visibility 0.2s, height 0.2s, opacity 0.2s linear;
        transition-delay: 0s;
    }

    > .title {
        border-radius: 5px;

        transition: border-radius 0.2s linear;
    }

    > .title > h1 {
        visibility: hidden;
        opacity: 0;

        transition: visibility 0.2s, opacity 0.2s linear;
        transition-delay: 0s;
    }

    &:hover {
        margin-top: calc(-1 * var(--margin-vertical));
        transform: translateY(var(--translateY)) scale(var(--scale));
        box-shadow: 0 0px 15px rgba(0,0,0,0.4);
        z-index: 1;

        transition-delay: 0.6s;

        > .descrip {
            visibility: visible;
            opacity: 1;
            transition-delay: 0.6s;
        }

        &:first-child {
            transform: translateY(var(--translateY)) translateX(calc(var(--translateX) - var(--margin-sides) - 20px)) scale(var(--scale));
        }
        
        &:last-child {
            transform: translateY(var(--translateY)) translateX(calc((var(--translateX) - var(--margin-sides) - 20px) * -1)) scale(var(--scale));
        }

        > .title {
            border-radius: 5px 5px 0px 0;

            visibility: visible;
            opacity: 1;
            transition-delay: 0.6s;
        }

        > .title {
            border-radius: 5px 5px 0px 0;   

            visibility: visible;
            opacity: 1;
            transition-delay: 0.6s;
        }

        > .title > h1 {
            display: flex;
            visibility: visible;
            opacity: 1;

            transition-delay: 0.8s;
        }

    }

`;

export const Title = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: left;
    
    padding: 0 15px;

    border-radius: 5px;

    > h1 {
        font-size: 18px;
        font-weight: bold;
        margin: 0;
        color: rgba(255, 255, 255, 0.7);
    }

    min-height: 150px;
`;

export const IconsDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 10px 15px;

    background-color: rgb(20, 20, 20);
`;

export const IconsList = styled.div`
    display: flex;
    align-items: center;

`;

export const Infos = styled.div`
    display: flex;
    align-items: center;

    padding: 5px 15px;

    background-color: rgb(20, 20, 20);

    font-size: 12px;

    margin-top: -1px;

    width: 100%;

    > b {
        color: #00A302;

        font-weight: bold;
    }

    > strong {
        margin-left: 7px;

        background-color: ${props => props.children[1].props.children === "18" ? "#000" : 
                                (props.children[1].props.children === "16" ? "#b30000" :
                                    (props.children[1].props.children === "14"    ? "#e63900" :
                                        (props.children[1].props.children === "12"    ? "#cccc00" :
                                            (props.children[1].props.children === "10"    ? "#0099cc" : "#208000")
                                        )
                                    )
                                ) };

        color: ${props => props.children[1].props.children === "12" ? "#000" : "#fff"};
        
        border-radius: 3px;

        padding: ${props => props.children[1].props.children === "L" ? "4px 8px" : "4px"};;
        font-size: 13px;
        
        line-height: 15px;
    }

    > p {
        margin-left: 7px;
    }

    > span {
        margin-left: 7px;

        font-size: 9px;
        font-weight: lighter;

        border: 1px solid rgba(255, 255, 255, 0.5);
        border-radius: 2px;

        padding: 0 4px;

        line-height: 10px;
    }

`;

export const Genres = styled.div`

    margin-top: -1px;

    display: flex;
    align-items: center;

    background-color: rgb(20, 20, 20);

    padding: 10px 15px 15px 15px;

    font-size: 11px;

    box-shadow: 0 0px 15px rgba(0,0,0,0.4);

    border-radius: 0 0 5px 5px;

    > p {
        color: rgba(255, 255, 255, 0.5);
        margin: 0 12px;
    }
`;

export const ButtonPlay = styled.button`
    
    padding: 0px;

    color: rgb(20, 20, 20);

    display: flex;
    justify-content: center;
    align-items: center;

    width: 35px;
    height: 35px;

    background-color: rgba(255, 255, 255, 1);
    border-radius: 50%;
    border: none;

    transition: border 100ms;

    &:hover {
        background-color: rgba(255, 255, 255, 0.8);
    }
`;

export const Button = styled.button`

    padding: 7px;

    color: #FFF;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-left: 4px;

    width: 35px;
    height: 35px;


    background-color: transparent;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;

    transition: border 100ms;

    &:hover {
        border: 2px solid rgba(255, 255, 255, 1);
    }
`;

export const PLayIcon = styled(Play)`
    width: 35px;
    height: 35px;

    margin-left: 4px;

    color: rgb(20, 20, 20);
`;

export const AddIcon = styled(Add)`
    width: 23px;
    height: 23px;
`;

export const CheckIcon = styled(Check2)`
    width: 23px;
    height: 23px;
`;

export const ThumbLikeIcon = styled(ThumbLike)`
    width: 23px;
    height: 23px;
`;

export const ThumbLikeFillIcon = styled(ThumbLikeFill)`
    width: 23px;
    height: 23px;
`;

export const ThumbDislikeIcon = styled(ThumbDislike)`
    width: 23px;
    height: 23px;
`;

export const ThumbDislikeFillIcon = styled(ThumbDislikeFill)`
    width: 23px;
    height: 23px;
`;

export const MoreInfoIcon = styled(KeyboardArrowDown)`
    width: 28px;
    height: 28px;
`;




