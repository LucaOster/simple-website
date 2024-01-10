import "./style.scss";

export default function Sites() {

    const onclickoutsite = () => {
        window.location.href = "/group/outsidehomepage";
      };
      const onclickbid = () => {
        window.location.href = "/group/bidhelps";
      };

    return (
        <>
            <div>
                <div id="mySidenav" class="sidenav">
                    <a id="News" onClick={onclickoutsite}>OutSites</a>
                    <a id="Report" onClick={onclickbid}>Bids Helps</a>
                </div>
            </div>
        </>
      )
}
  