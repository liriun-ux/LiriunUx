const Logo: React.FC = () => {

  return (
  <div className="circle-container">
    <div className="relleno"></div>
    <div className="border-segment" style={{animationDelay:"-1s" }}></div>
    <div className="border-segment" style={{animationDirection:"reverse"}}></div>
    <div className="border-segment"></div>
    <div className="base-circle"></div>
    <div className="logo">
        <div className="TexLogo">
            Y
        </div>
    </div>
  </div>
  );
};
export default Logo;
