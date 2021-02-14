import styled from 'styled-components';

const VideoWrapper = styled(({...otherprops})=> <video {...otherprops} loop autoPlay muted/>)`
& {
    height: 100vh;
    min-height: 100vh;
    position: absolute;
    margin-left: ${-50 + 100/6/2}vw;
}
`

export default VideoWrapper;