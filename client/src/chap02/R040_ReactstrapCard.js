import React from 'react';
import {Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle} from "reactstrap";

function R040_ReactstrapCard(props) {
  return (
    <div style={{padding: '0px'}}>
      <Card>
        <CardImg top height={`300px`} src={`https://cdn.pixabay.com/photo/2023/07/01/05/20/carniolan-honey-bee-8099474_1280.jpg`}
                 alt={`Card image`} />
        <CardBody>
          <CardTitle>Card 제목</CardTitle>
          <CardSubtitle>Card 부제목</CardSubtitle>
          <CardText>Card 내용 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolor pariatur
            suscipit voluptas voluptatum. Ea, praesentium vel. Adipisci alias ipsum nobis placeat voluptatem!
            Corporis excepturi incidunt nihil rerum saepe ut!</CardText>
          <Button>버튼</Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default R040_ReactstrapCard;