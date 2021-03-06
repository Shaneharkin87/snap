import * as React from 'react';
import Card from '../card/Card';
import { ICardProps } from '../card/ICardProps';
import '../../../branding.css';

export default class Game extends React.Component<any, {}> {
    public constructor(props: ICardProps) {
        super(props);
    }

    deck:ICardProps[] = [
        {cardNo: 'A', image:"../../../Images/smol.png", noStyle: 'topLeft', style: 'cardContainer'},
        /*{cardNo: '2', image:"../../../Images/smol.png", noStyle: 'topLeft', style: 'cardContainer'},
        {cardNo: '3', image:"../../../Images/smol.png", noStyle: 'topLeft', style: 'cardContainer'},
        {cardNo: '4', image:"../../../Images/smol.png", noStyle: 'topLeft', style: 'cardContainer'},
        {cardNo: '5', image:"../../../Images/smol.png", noStyle: 'topLeft', style: 'cardContainer'},
        {cardNo: '6', image:"../../../Images/smol.png", noStyle: 'topLeft', style: 'cardContainer'},
        {cardNo: '7', image:"../../../Images/smol.png", noStyle: 'topLeft', style: 'cardContainer'},
        {cardNo: '8', image:"../../../Images/smol.png", noStyle: 'topLeft', style: 'cardContainer'},
        {cardNo: '9', image:"../../../Images/smol.png", noStyle: 'topLeft', style: 'cardContainer'},
        {cardNo: '10',image:"../../../Images/smol.png", noStyle: 'topLeft', style: 'cardContainer'},
        {cardNo: 'J', image:"../../../Images/smol.png", noStyle: 'topLeft', style: 'cardContainer'},
        {cardNo: 'Q', image:"../../../Images/smol.png", noStyle: 'topLeft', style: 'cardContainer'},
        {cardNo: 'K', image:"../../../Images/smol.png", noStyle: 'topLeft', style: 'cardContainer'},*/
        {cardNo: 'A', image:"../../../Images/club.png", noStyle: 'topLeft', style: 'cardContainer'},
        /*{cardNo: '2', image:"../../../Images/club.png", noStyle: 'topLeft', style: 'cardContainer'},
        {cardNo: '3', image:"../../../Images/club.png", noStyle: 'topLeft', style: 'cardContainer'},
        {cardNo: '4', image:"../../../Images/club.png", noStyle: 'topLeft', style: 'cardContainer'},
        {cardNo: '5', image:"../../../Images/club.png", noStyle: 'topLeft', style: 'cardContainer'},
        {cardNo: '6', image:"../../../Images/club.png", noStyle: 'topLeft', style: 'cardContainer'},
        {cardNo: '7', image:"../../../Images/club.png", noStyle: 'topLeft', style: 'cardContainer'},
        {cardNo: '8', image:"../../../Images/club.png", noStyle: 'topLeft', style: 'cardContainer'},
        {cardNo: '9', image:"../../../Images/club.png", noStyle: 'topLeft', style: 'cardContainer'},
        {cardNo: '10',image:"../../../Images/club.png", noStyle: 'topLeft', style: 'cardContainer'},
        {cardNo: 'J', image:"../../../Images/club.png", noStyle: 'topLeft', style: 'cardContainer'},
        {cardNo: 'Q', image:"../../../Images/club.png", noStyle: 'topLeft', style: 'cardContainer'},
        {cardNo: 'K', image:"../../../Images/club.png", noStyle: 'topLeft', style: 'cardContainer'},*/
        {cardNo: 'A', image:"../../../Images/heart.png", noStyle: 'topLeftRed', style: 'cardContainer'},
        /*{cardNo: '2', image:"../../../Images/heart.png", noStyle: 'topLeftRed', style: 'cardContainer'},
        {cardNo: '3', image:"../../../Images/heart.png", noStyle: 'topLeftRed', style: 'cardContainer'},
        {cardNo: '4', image:"../../../Images/heart.png", noStyle: 'topLeftRed', style: 'cardContainer'},
        {cardNo: '5', image:"../../../Images/heart.png", noStyle: 'topLeftRed', style: 'cardContainer'},
        {cardNo: '6', image:"../../../Images/heart.png", noStyle: 'topLeftRed', style: 'cardContainer'},
        {cardNo: '7', image:"../../../Images/heart.png", noStyle: 'topLeftRed', style: 'cardContainer'},
        {cardNo: '8', image:"../../../Images/heart.png", noStyle: 'topLeftRed', style: 'cardContainer'},
        {cardNo: '9', image:"../../../Images/heart.png", noStyle: 'topLeftRed', style: 'cardContainer'},
        {cardNo: '10',image:"../../../Images/heart.png", noStyle: 'topLeftRed', style: 'cardContainer'},
        {cardNo: 'J', image:"../../../Images/heart.png", noStyle: 'topLeftRed', style: 'cardContainer'},
        {cardNo: 'Q', image:"../../../Images/heart.png", noStyle: 'topLeftRed', style: 'cardContainer'},
        {cardNo: 'K', image:"../../../Images/heart.png", noStyle: 'topLeftRed', style: 'cardContainer'},*/
        {cardNo: 'A', image:"../../../Images/diamond.png", noStyle: 'topLeftRed', style: 'cardContainer'},
        /*{cardNo: '2', image:"../../../Images/diamond.png", noStyle: 'topLeftRed', style: 'cardContainer'},
        {cardNo: '3', image:"../../../Images/diamond.png", noStyle: 'topLeftRed', style: 'cardContainer'},
        {cardNo: '4', image:"../../../Images/diamond.png", noStyle: 'topLeftRed', style: 'cardContainer'},
        {cardNo: '5', image:"../../../Images/diamond.png", noStyle: 'topLeftRed', style: 'cardContainer'},
        {cardNo: '6', image:"../../../Images/diamond.png", noStyle: 'topLeftRed', style: 'cardContainer'},
        {cardNo: '7', image:"../../../Images/diamond.png", noStyle: 'topLeftRed', style: 'cardContainer'},
        {cardNo: '8', image:"../../../Images/diamond.png", noStyle: 'topLeftRed', style: 'cardContainer'},
        {cardNo: '9', image:"../../../Images/diamond.png", noStyle: 'topLeftRed', style: 'cardContainer'},
        {cardNo: '10',image:"../../../Images/diamond.png", noStyle: 'topLeftRed', style: 'cardContainer'},
        {cardNo: 'J', image:"../../../Images/diamond.png", noStyle: 'topLeftRed', style: 'cardContainer'},
        {cardNo: 'Q', image:"../../../Images/diamond.png", noStyle: 'topLeftRed', style: 'cardContainer'},
        {cardNo: 'K', image:"../../../Images/diamond.png", noStyle: 'topLeftRed', style: 'cardContainer'},*/
    ]; 
    playerDeck:ICardProps[] = [];

    private shuffle(deck:ICardProps[]){
        for(let i = deck.length; i >= 0; i--){
            if(deck[i] == undefined)
                deck.splice(0,0);
        }
        for(let i = deck.length; i >= 0; i--){
            let j = Math.floor(Math.random() * i);
            [deck[i], deck[j]] = [deck[j],  deck[i]];
        }
    }

    private deal(deck:ICardProps[], playerDeck:ICardProps[]):ICardProps[]{
        let j = 0;

        for(let i=0; i <= deck.length; i++){
            if(i % 2 == 0 ){
                playerDeck[j] = deck[i];
                j++;
            }
        }
        return playerDeck;
    }

    
    public render(): React.ReactElement<any> {
        console.log(this.deck);
        this.shuffle(this.deck);
        this.playerDeck = this.deal(this.deck, this.playerDeck); 
        console.log(this.playerDeck);

        return (
            <div className="game"> 
                {this.playerDeck.map((current, index) =>{
                    return(<div>{

                        current != undefined ? <Card
                                                cardNo = {current.cardNo}
                                                image = {current.image}
                                                style = {current.style}
                                                noStyle= {current.noStyle}
                                                key = {index}/>
                        :null }</div>) 
                })
                }
            </div>
            );
        }
    }

  
