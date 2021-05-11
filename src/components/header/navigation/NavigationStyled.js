import styled from 'styled-components';



export const NavigationStyledContainer = styled.div`
.NavLink{
font-size:20px;
color:black;
text-decoration:none;
}

.NavLink--active{
color:violet;
}

.list{
list-style: none;
    display: flex;
    align-items:center;
    margin-right: -30px;

}
.link{
text-decoration:none;
text-transform: uppercase;
color: slateblue;
font-weight: 700;

}
.listItem{

    margin-right: 30px;
}

`