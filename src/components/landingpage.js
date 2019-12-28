import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return(
            <div style = {{width : '100%', margin: 'auto'}} >
                <Grid className = "landing-grid">
                    <Cell col = {12}>
                        <img 
                            src= "https://www.advanceinnovationgroup.com/shop/admin/img/advisor/1576069081_avatar-male-consultant.png"
                            alt= "avatar"
                            className= "avatar-img"
                        />

                        <div className= "banner-text">
                            <h1>Human Resource Management</h1>

                            <hr/>
                            <p>“Take time to appreciate employees and they will reciprocate in a thousand ways.”</p>
                        
                       
                        
                        </div>
                    </Cell>
                </Grid>
            </div>
            )
    }
}

export default Landing;