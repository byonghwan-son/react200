import React from 'react';
import {UncontrolledCarousel} from "reactstrap";

function R041_ReactstrapCarousel(props) {
  //
  //
  const items = [
    {
      src: 'https://cdn.pixabay.com/photo/2023/07/01/05/20/carniolan-honey-bee-8099474_1280.jpg',
      altText: '슬라이드1 이미지 대체 문구',
      caption: '슬라이드1 설명',
      header: '슬라이드1 제목'
    },
    {
      src: 'https://cdn.pixabay.com/photo/2023/11/21/07/02/girl-8402582_1280.jpg',
      altText: '슬라이드2 이미지 대체 문구',
      caption: '슬라이드2 설명',
      header: '슬라이드2 제목'
    },
    {
      src: 'https://cdn.pixabay.com/photo/2023/04/22/10/28/sheep-7943526_1280.jpg',
      altText: '슬라이드3 이미지 대체 문구',
      caption: '슬라이드3 설명',
      header: '슬라이드3 제목'
    },
  ]

  return (
    <UncontrolledCarousel items={items}/>
  );
}

export default R041_ReactstrapCarousel;