import "./style.scss";

export default function News() {

    const onclickblog = () => {
        window.location.href = "/group/blog";
      };
      const onclickview_new = () => {
        window.location.href = "/group/view_new";
      };

    return (
        <>
            <div>
                <div id="mySidenav" class="sidenav">
                    <a id="News" onClick={onclickview_new}>New_Alarm</a>
                    <a id="Report" onClick={onclickblog}>Blog</a>
                </div>
            </div>
        </>
      )
}
  