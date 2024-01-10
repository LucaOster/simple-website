import "./style.scss";

export default function GroupRank() {

<<<<<<< HEAD
    const onclickrankmanage = () => {
=======
  /*  const onclickrankmanage = () => {
>>>>>>> b36ccb55e92c37a43767a948f38a6e3732ad4c11
        window.location.href = "/group/rankmanage";
      };
      const onclickrankview = () => {
        window.location.href = "/group/rankview";
<<<<<<< HEAD
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
=======
      };*/

    return (
      <>
      <header>
        <div class="navbar">
        <a href="/">Home</a>
          <div class="dropdown">
            <button class="dropbtn">News 
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="/group/view_new">New_Alarm</a>
              <a href="/group/blog">Blog</a>
            </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn">Report 
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="/group/newsmanage">New_Manage</a>
              <a href="/group/reportview">View_All_Reports</a>
              <a href="/group/makereport">Make_Report</a>
            </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn">Group-Rank 
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="/group/rankview">RankView</a>
              <a href="/group/rankmanage">RankManage</a>
            </div>
          </div>
          <a href="/group/calllog">Call-Log</a>
          <div class="dropdown">
            <button class="dropbtn">Sites
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="/group/outsidehomepage">OutSites</a>
              <a href="/group/bidhelps">Bids Helps</a>
            </div>
          </div>
        </div>
      </header>
      {/*<div>
          <div id="mySidenav" class="sidenav">
              <a id="News" onClick={onclicknews}>News</a>
              <a id="Report" onClick={onclickreports}>Report</a>
              <a id="Call-Log" onClick={onclickcalllog}>Call-Log</a>
              <a id="Group-Rank" onClick={onclickgrouprank}>Group-Rank</a>
              <a id="Sites" onClick={onclicksites}>Sites</a>
          </div>
  </div>*/}
    </>
>>>>>>> b36ccb55e92c37a43767a948f38a6e3732ad4c11
      )
}
  