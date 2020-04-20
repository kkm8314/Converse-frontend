import React, { Component } from 'react'

import ContentsContainer from "./ContentsContainer/ContentsContainer";

import "./Main.scss";

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            contents: []
        };
    }
    
    setContents() {
        const contents = [
            {
                img: "",
                name: "컨버스 X 네이버후드 척 70",
                price: 135000,
                badges: ["BEST SELLER", "NEW ARRIVAL"],
                type: 1
            },
            {
                img: "",
                name: "컨버스 X 네이버후드 잭퍼셀",
                price: 125000,
                badges: ["NEW ARRIVAL"],
                type: 1
            },
            {
                img: "",
                title: "CONVERSE X NEIGHBORHOOD", //P: weight 700, line-height:1.2em, font-size: calc( 30px + 1.25*(100vw - 767px)/42.0625)
                description: "컨버스와의 두번째 콜라보를 위해 돌아온 네이버후드는 모터사이클 문화에 대한 깊은 해석을 통해<br/> 척70, 잭퍼셀 그리고 어패럴 컬렉션을 선보입니다.",
                //font-size: calc( 12px + 0.25*(100vw - 767px)/42.0625)
                badges: ["LIMITED EDITION"],
                type: 2
            },
            {
                img: "",
                title: "CONVERSE X NEIGHBORHOOD",
                type: 4
            },
            {
                img: "",
                title: "CONVERSE X NEIGHBORHOOD",
                type: 4
            }
        ];

        this.makeGroup(contents);
    }

    makeGroup(contents) {
        let section = [];
        let dividedContents = [];
        let sum = 0;

        contents.forEach(content => {
            console.log("TT", content);

            if (content.type !== undefined) {
                if (sum + content.type <= 8) {
                    section.push(content);
                    sum += content.type;
                } else { // 8초과 후 남는 contents 버려짐
                    sum = 0;
                    dividedContents.push(section);
                    section = [].push(content);
                }
            }
            console.log("con", content);
            console.log("sec", section);
            console.log("div", dividedContents);
        });

        this.setState({
            contents: Array.from(dividedContents)
        })
    }

    componentDidMount() {
        this.setContents();
    }

    render() {
        return (
            <div className="Main">
                <h1>--- Header ---</h1>
                <h1>Main starts</h1>
                <ContentsContainer 
                    contents={this.state.contents}
                />
                <h1>Main = max-width:1440px</h1>
            </div>
        );
    }
}

export default Main;