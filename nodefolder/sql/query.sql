
-- react.react_swtool definition
use react;

CREATE TABLE `react_swtool` (
  `swt_code` varchar(100) NOT NULL COMMENT 'sw툴 코드',
  `swt_toolname` varchar(100) DEFAULT NULL COMMENT '툴 이름',
  `swt_function` text COMMENT '상세 기능',
  `swt_imagepath` varchar(200) DEFAULT NULL COMMENT '라벨 이미지 경로',
  `swt_big_imgpath` varchar(200) DEFAULT NULL COMMENT '메인 이미지 경로',
  `swt_comments` text COMMENT '설명',
  `swt_demo_site` varchar(100) DEFAULT NULL COMMENT '데모 URL',
  `swt_manual_path` varchar(100) DEFAULT NULL COMMENT '메뉴얼 파일 경로',
  `swt_github_url` varchar(100) DEFAULT NULL COMMENT 'GitHub URL',
  `reg_date` varchar(100) DEFAULT NULL COMMENT '등록날짜',
  `reg_user` varchar(100) DEFAULT NULL COMMENT '등록자',
  `update_date` varchar(100) DEFAULT NULL COMMENT '수정날짜',
  `update_user` varchar(100) DEFAULT NULL COMMENT '수정자',
  PRIMARY KEY (`swt_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `react_swtool` VALUES ('USW20200101000000', '툴 이름1', '상세 기능1', '20200101000000_라벨 이미지.png'
, '20200101000000_메인 이미지.png', '설명1', '데모 URL1', '20200101000000_메뉴얼 파일.docx', 'Github URL1'
, '20200101000000', 'userA1`', '20200102000000', 'userB1');
INSERT INTO `react_swtool` VALUES ('USW20200102000000', '툴 이름2', '상세 기능2', '20200102000000_라벨 이미지.png'
, '20200102000000_메인 이미지.png', '설명2', '데모 URL2', '20200102000000_메뉴얼 파일.docx', 'Github URL2'
, '20200102000000', 'userA2`', '20200103000000', 'userB2');

select * from react_swtool;