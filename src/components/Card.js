import React from 'react';

import { Tooltip } from "@chakra-ui/react"

import { Card, Title, IconsDiv, IconsList, Infos, Genres } from './CardStyles';
import { Button, ButtonPlay, PLayIcon, AddIcon, CheckIcon, ThumbLikeIcon, ThumbLikeFillIcon, ThumbDislikeIcon, ThumbDislikeFillIcon, MoreInfoIcon } from './CardStyles';
import { useState } from 'react/cjs/react.development';

export default function CardItem({item}) {

  const styleTooltip = {
    placement: "top",
    bg: "#fff",
    color: "#000",
    hasArrow: true,
    fontSize: '18px',
    fontWeight: 'bold',
    closeOnClick: false,
  }
  
  const [added, setAdded] = useState(false);
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  
  return (
    <Card>
      <Title className="title"  style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${item.backdrop_path})`, backgroundSize: 'cover',
    }}>
        <h1>{item.original_name}</h1>
      </Title>
      <div className="descrip">

        <IconsDiv>
          <IconsList>
            <ButtonPlay children={<PLayIcon/>}/>

            <Tooltip children={<Button onClick={() => setAdded(!added)} children={ added ? <CheckIcon/> : <AddIcon/>}/>} label={ !added ? "Adicionar à Minha Lista" : "Remover da Minha Lista"} {...styleTooltip}/>

            <Tooltip children={<Button onClick={() => { setLike(!like); setDislike(false)}} children={ like ? <ThumbLikeFillIcon/> : <ThumbLikeIcon/>}/>} label={ !like ? "Gostei" : "Classificados"} {...styleTooltip}/>

            <Tooltip children={<Button onClick={() => { setDislike(!dislike); setLike(false)}}  children={ dislike ? <ThumbDislikeFillIcon/> : <ThumbDislikeIcon/>}/>} label={ !dislike ? "Não é para mim" : "Classificados"} {...styleTooltip}/>

          </IconsList>

          <Tooltip children={<Button children={<MoreInfoIcon/>}/>} label="Mais Informações" {...styleTooltip}/>

        </IconsDiv>

        <Infos>
          <b>{item.vote_average * 10}% relevante</b>

          <strong>{item.censure === "18" || item.censure === "16" || item.censure === "14" || item.censure === "12" || item.censure === "10" ? item.censure : "L"}</strong>

          <p>1h 58min</p>

          {item.isHD && <span>HD</span>}
        </Infos>

        <Genres>
          Ação  <p>•</p>  Aventura  <p>•</p>  Ficcção
        </Genres>

      </div>
    </Card>
  );
}