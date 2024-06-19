import React from 'react';
import MemberWrapper from './member.styles';

function Member () {
    return (
        <MemberWrapper>
            <h2>Member Exclusive</h2>
            <p>15% off everything + extra $10 off for plus status</p>
            <a href='#'>Not a member? Join now to shop.</a>
        </MemberWrapper>
    )
}

export default Member;