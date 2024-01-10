import "./style.scss";

export default function GroupRank() {

    const onclickrankmanage = () => {
        window.location.href = "/group/rankmanage";
      };
      const onclickrankview = () => {
        window.location.href = "/group/rankview";
      };

    return (
        <>
            <div>
                <div id="mySidenav" class="sidenav">
                    <a id="News" onClick={onclickrankview}>RankView</a>
                    <a id="Report" onClick={onclickrankmanage}>RankManage</a>
                </div>
            </div>
        </>
      )
}
  