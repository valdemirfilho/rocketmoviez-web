import styled from 'styled-components'

const Container = styled.div`
@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg); } }

.rainbow {
  border-radius: 100%;
  -webkit-clip-path: inset(0 0 50% 0);
  clip-path: inset(0 0 50% 0);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  height: 100px;
  position: absolute;
  width: 100px;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -25%);
          transform: translate(-50%, -25%); 
}

.rainbow:after {
    content: '';
    height: 10px;
    width: 10px;
    position: absolute;
    border-radius: 100%;
    -webkit-box-shadow: -40px -2px 0 1px #ffffff, -35px -6px 0 1px #ffffff, -30px -2px 0 1px #ffffff, -30px -8px 0 1px #ffffff, -25px -2px 0 1px #ffffff, -25px -8px 0 1px #ffffff, -20px -6px 0 1px #ffffff, -15px -2px 0 1px #ffffff, 40px -2px 0 1px #ffffff, 35px -6px 0 1px #ffffff, 30px -2px 0 1px #ffffff, 30px -8px 0 1px #ffffff, 25px -2px 0 1px #ffffff, 25px -8px 0 1px #ffffff, 20px -6px 0 1px #ffffff, 15px -2px 0 1px #ffffff;
            box-shadow: -40px -2px 0 1px #ffffff, -35px -6px 0 1px #ffffff, -30px -2px 0 1px #ffffff, -30px -8px 0 1px #ffffff, -25px -2px 0 1px #ffffff, -25px -8px 0 1px #ffffff, -20px -6px 0 1px #ffffff, -15px -2px 0 1px #ffffff, 40px -2px 0 1px #ffffff, 35px -6px 0 1px #ffffff, 30px -2px 0 1px #ffffff, 30px -8px 0 1px #ffffff, 25px -2px 0 1px #ffffff, 25px -8px 0 1px #ffffff, 20px -6px 0 1px #ffffff, 15px -2px 0 1px #ffffff; }

  .rainbow:before {
    content: '';
    height: 80px;
    width: 80px;
    -webkit-animation: spin 1.5s infinite;
            animation: spin 1.5s infinite;
    border-radius: 100%;
    -webkit-box-shadow: 0 0 0 4px #f22613 inset, 0 0 0 8px #f89406 inset, 0 0 0 12px #f9bf3b inset, 0 0 0 16px #2ecc71 inset, 0 0 0 20px #19b5fe inset, 0 0 0 24px #663399 inset, 0 0 0 28px #bf55ec inset;
            box-shadow: 0 0 0 4px #f22613 inset, 0 0 0 8px #f89406 inset, 0 0 0 12px #f9bf3b inset, 0 0 0 16px #2ecc71 inset, 0 0 0 20px #19b5fe inset, 0 0 0 24px #663399 inset, 0 0 0 28px #bf55ec inset;
    -webkit-clip-path: inset(0 0 50% 0);
    clip-path: inset(0 0 50% 0);
    overflow: hidden;
    position: absolute; }
`

export function LoaderRainbow() {
  return (
    <Container>
      <div className="rainbow"> </div>
    </Container>
  )
}