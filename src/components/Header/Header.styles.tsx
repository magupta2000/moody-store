import styled from "styled-components";

const HeaderWrapper = styled.div`
    .top {
        display: flex;
        justify-content: space-around;
        background-color: #f8f8f8;
        border-bottom: 1px solid #000;
        h4{
            text-transform: uppercase;
        }
        .icons{
            margin-right: 4px;
            display: flex;
            align-items: center;
            margin-left: auto;
            .anticon {
                padding: 10px;
            }
        }
    }
    .ant-menu-horizontal  {
        list-style: none;
        display: flex;
        gap: 20px;
        margin: 0;
        padding: 0;
        li {
            display: inline
        }
     }
    .breadcrumb {        
        border-top: 1px solid #000;
        padding: 10px 20px;
        display: flex;
        justify-content: center;
        p {
            margin: 0;
            font-size: 14px;
            color: #555;
        }
    }

`;

export default HeaderWrapper;