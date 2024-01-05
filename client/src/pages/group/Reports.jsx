import "./style.scss";

export default function Reports() {

    const onclicknewManage = () => {
        window.location.href = "/group/newsmanage";
      };
      const onclickreportview = () => {
        window.location.href = "/group/reportview";
      };
      const onclickreportwork = () => {
        window.location.href = "/group/makereport";
      };

    return (
        <>
            <div>
                <div id="mySidenav" class="sidenav">
                    <a id="News" onClick={onclicknewManage}>News Manage</a>
                    <a id="Report" onClick={onclickreportview}>View All Reporst</a>
                    <a id="Group-Rank" onClick={onclickreportwork}>Make Report</a>
                </div>
            </div>
        </>
      )
}
  