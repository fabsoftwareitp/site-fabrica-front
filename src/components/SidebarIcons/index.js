import React from 'react';

import { SidebarContainer, SocialMediaIcons } from './styles';
import Facebook from '../../images/icones/facebook.svg';
// import Instagram from '../../images/icones/instagram.svg';
import GitHub from '../../images/icones/github.svg';

function SidebarIcons() {

        return (
            <SidebarContainer> 
                <ul>
                    {/* {<li> 
                        <a href="/">
                            <SocialMediaIcons src={Facebook} />
                        </a>
                    </li>} */}
                    {/* <li>
                        <a href="/">
                            <SocialMediaIcons src={Instagram} />
                        </a>
                    </li> */}
                    <li>
                        <a href="https://github.com/fabsoftwareitp/">
                            <SocialMediaIcons src={GitHub} />
                        </a>
                    </li>
                </ul>
            </SidebarContainer>
        );
}

export default SidebarIcons;