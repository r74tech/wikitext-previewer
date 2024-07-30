import React from 'react';

const SideBar: React.FC = () => {
    return (
        <>
            <div className="side-block" style={{ backgroundColor: '#a7dba2' }}>
                <div className="heading">
                    <p>新しいメンバー向け情報</p>
                </div>
                <div className="menu-item">
                    <img alt="help.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/help.png" /><a href="/about-the-scp-foundation">SCP財団とは</a>
                </div>
                <div className="menu-item">
                    <img alt="help.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/help.png" /><a href="/faq">FAQ</a>
                </div>
                <div className="menu-item">
                    <img alt="help.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/help.png" /><a href="/contact-staff">問い合わせ</a>
                </div>
                <div className="menu-item">
                    <img alt="help.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/help.png" /><a href="/site-rules">サイトルール</a>
                </div>
                <div className="menu-item">
                    <img alt="help.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/help.png" /><a href="/licensing-guide">ライセンスガイド</a>
                </div>
                <div className="menu-item">
                    <img alt="main.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/main.png" /><a href="/guide-for-newbies">サイトへの参加</a>
                </div>
            </div>
            <hr />
            <div className="side-block">
                <div className="menu-item">
                    <img alt="home.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/home.png" /><a href="/">メインページ</a>
                </div>
                <div className="heading">
                    <p>SCPデータベース</p>
                </div>
                <div className="menu-item">
                    <img alt="series.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/series.png" /><a href="/scp-series-jp-4">シリーズJP-IV</a> <span className="sub-text">(3000-JP~3999-JP)</span>
                </div>
                <div className="menu-item">
                    <img alt="series.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/series.png" /><a href="/scp-series-jp-3">シリーズJP-III</a> <span className="sub-text">(2000-JP~2999-JP)</span>
                </div>
                <div className="menu-item">
                    <img alt="series.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/series.png" /><a href="/scp-series-jp-2">シリーズJP-II</a> <span className="sub-text">(1000-JP~1999-JP)</span>
                </div>
                <div className="menu-item">
                    <img alt="series.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/series.png" /><a href="/scp-series-jp">シリーズJP-I</a> <span className="sub-text">(001-JP~999-JP)</span>
                </div>
                <hr />
                <div className="menu-item">
                    <img alt="series.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/series.png" /><a href="/scp-series-9">シリーズIX</a> <span className="sub-text">(8000~8999)</span>
                </div>
                <div className="menu-item">
                    <img alt="series.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/series.png" /><a href="/scp-series-8">シリーズVIII</a> <span className="sub-text">(7000~7999)</span>
                </div>
                <div className="menu-item">
                    <img alt="series.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/series.png" /><a href="/scp-series-7">シリーズVII</a> <span className="sub-text">(6000~6999)</span>
                </div>
                <div className="menu-item">
                    <img alt="series.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/series.png" /><a href="/scp-series-6">シリーズVI</a> <span className="sub-text">(5000~5999)</span>
                </div>
                <div className="menu-item">
                    <img alt="series.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/series.png" /><a href="/scp-series-5">シリーズV</a> <span className="sub-text">(4000~4999)</span>
                </div>
                <div className="menu-item">
                    <img alt="series.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/series.png" /><a href="/scp-series-4">シリーズIV</a> <span className="sub-text">(3000~3999)</span>
                </div>
                <div className="menu-item">
                    <img alt="series.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/series.png" /><a href="/scp-series-3">シリーズIII</a> <span className="sub-text">(2000~2999)</span>
                </div>
                <div className="menu-item">
                    <img alt="series.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/series.png" /><a href="/scp-series-2">シリーズII</a> <span className="sub-text">(1000~1999)</span>
                </div>
                <div className="menu-item">
                    <img alt="series.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/series.png" /><a href="/scp-series">シリーズI</a> <span className="sub-text">(001~999)</span>
                </div>
                <div className="heading">
                    <p>SCPライブラリ</p>
                </div>
                <div className="menu-item">
                    <img alt="series.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/series.png" /><a href="/foundation-tales-jp">Tales-JP</a>
                </div>
                <div className="menu-item">
                    <img alt="series.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/series.png" /><a href="/canon-hub-jp">カノン-JP</a>
                </div>
                <div className="menu-item">
                    <img alt="series.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/series.png" /><a href="/series-hub-jp">連作-JP</a>
                </div>
                <div className="menu-item">
                    <img alt="series.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/series.png" /><a href="/foundation-tales">Tales</a>
                </div>
                <div className="menu-item">
                    <img alt="series.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/series.png" /><a href="/canon-hub">カノン</a>
                </div>
                <div className="menu-item">
                    <img alt="series.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/series.png" /><a href="/scp-international">SCP国際版</a>
                </div>
                <div className="menu-item">
                    <img alt="series.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/series.png" /><a href="/goi-formats">GoIフォーマット一覧</a>
                </div>
                <div className="menu-item">
                    <img alt="series.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/series.png" /><a href="/goi-formats-jp">GoIフォーマット-JP一覧</a>
                </div>
                <div className="menu-item">
                    <img alt="series.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/series.png" /><a href="/international-goi-formats">GoIフォーマット国際版</a>
                </div>
                <div className="heading">
                    <p>サイト</p>
                </div>
                <div className="menu-item">
                    <img alt="main.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/main.png" /><a href="/system:recent-changes">最近の更新</a>
                </div>
                <div className="menu-item sub-item">
                    <img alt="default.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/default.png" /><a href="/most-recently-created">最近作成された記事</a>
                </div>
                <div className="menu-item sub-item">
                    <img alt="default.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/default.png" /><a href="/most-recently-edited">最近編集された記事</a>
                </div>
                <div className="menu-item">
                    <img alt="main.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/main.png" /><a href="/random:random-page">ランダムページ</a>
                </div>
                <div className="menu-item">
                    <img alt="default.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/default.png" /><a href="/top-rated-pages">評価の高い記事</a>
                </div>
                <div className="menu-item">
                    <img alt="default.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/default.png" /><a href="/lowest-rated-pages">評価の低い記事</a>
                </div>
                <hr />
                <div className="menu-item">
                    <img alt="default.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/default.png" /><a href="/top-rated-pages-en">評価の高い記事-EN</a>
                </div>
                <div className="heading">
                    <p>コミュニティ</p>
                </div>
                <div className="menu-item">
                    <img alt="help.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/help.png" /><a href="/guide-hub">ガイド</a>
                </div>
                <div className="menu-item">
                    <img alt="help.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/help.png" /><a href="/other-link-hub">お役立ちリンク集</a>
                </div>
                <div className="menu-item sub-item">
                    <img alt="default.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/default.png" /><a href="/members-pages-jp">著者ページ-JP</a>
                </div>
                <div className="menu-item sub-item">
                    <img alt="default.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/default.png" /><a href="/international-members-pages">著者ページ国際版</a>
                </div>
                <div className="menu-item sub-item">
                    <img alt="default.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/default.png" /><a href="/artwork-jp">アートワーク-JP</a>
                </div>
                <div className="menu-item sub-item">
                    <img alt="default.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/default.png" /><a href="/international-artwork">アートワーク国際版</a>
                </div>
                <div className="menu-item">
                    <img alt="forum.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/forum.png" /><a href="/forum:start">フォーラム</a>
                </div>
                <div className="menu-item sub-item">
                    <img alt="default.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/default.png" /><a href="/forum:recent-posts">最近の投稿</a>
                </div>
                <div className="menu-item sub-item">
                    <img alt="default.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/default.png" /><a href="http://scp-jp-sandbox3.wikidot.com/forum:recent-posts">最近の下書き批評</a>
                </div>
                <div className="menu-item">
                    <img alt="forum.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/forum.png" /><a href="/discord-guideline">チャット(Discord)</a>
                </div>
                <div className="menu-item sub-item">
                    <img alt="default.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/default.png" /><a href="http://ja.scp-wiki.net/meet-the-staff-jp">スタッフ一覧</a>
                </div>
                <div className="heading">
                    <p>執筆</p>
                </div>
                <div className="menu-item">
                    <img alt="help.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/help.png" /><a href="/how-to-write:how-to-write">記事を作成するには？</a>
                </div>
                <div className="menu-item">
                    <img alt="default.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/default.png" /><a href="/tag-guide">タグガイド</a>
                </div>
                <div className="menu-item">
                    <img alt="default.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/default.png" /><a href="/tag-list">タグリスト</a>
                </div>
                <div className="menu-item">
                    <img alt="default.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/default.png" /><a href="/wiki-syntax:startpage">Wikidotシンタックス</a>
                </div>
                <div className="heading">
                    <p>リンク</p>
                </div>
                <div className="menu-item">
                    <img alt="home.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/home.png" /><a href="http://www.scp-wiki.net/" target="_blank">SCP Foundation</a><i className="fa fa-language" style={{ color: 'grey' }}></i>
                </div>
                <div className="menu-item">
                    <img alt="default.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/default.png" /><a href="http://05command-ja.wikidot.com/" target="_blank">財団日本支部理事会</a>
                </div>
                <div className="menu-item">
                    <img alt="default.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/default.png" /><a href="/links">リンク集</a>
                </div>
                <div className="menu-item">
                    <img alt="default.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/default.png" /><a href="http://scp-int.wikidot.com/" target="_blank">SCP-INT</a><i className="fa fa-language" style={{ color: 'grey' }}></i>
                </div>
                <div className="menu-item">
                    <img alt="default.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/default.png" /><a href="http://scp-jp-storage.wikidot.com/" target="_blank">ファイルストレージ</a>
                </div>
                <div className="menu-item">
                    <img alt="default.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/default.png" /><a href="http://scp-jp-sandbox3.wikidot.com/start" target="_blank">サンドボックスⅢ</a>
                </div>
                <div className="menu-item">
                    <img alt="default.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/default.png" />（<a href="http://scp-jp-sandbox2.wikidot.com/start" target="_blank">サンドボックス</a>）
                </div>
                <div className="menu-item">
                    <img alt="default.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/default.png" />（<span style={{ textDecoration: 'line-through' }}><a href="http://scpsandbox-jp.wikidot.com/start" target="_blank">旧サンドボックス</a></span>）
                </div>
                <div className="menu-item">
                    <img alt="default.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/default.png" /><a href="http://scpper.com/" target="_blank">ScpperDB</a>
                </div>
                <div className="menu-item">
                    <img alt="default.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/default.png" /><a href="https://discord.gg/zeEwVG7" target="_blank">SCP-JP運営チャット</a>
                </div>
            </div>
            <hr />
            <div className="side-block sns" style={{ backgroundColor: '#e5e5ff' }}>
                <div className="menu-item">
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
                        <a href="https://twitter.com/scpjp_announce" target="_blank"><img alt="Twitter-icon-50.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/Twitter-icon-50.png" style={{ width: '40px', height: '40px' }} title="SCP-JP Twitter" /></a><a href="http://ja.scp-wiki.net/discord-guideline"><img alt="discord_icon.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/discord_icon.png" style={{ width: '37px', height: '37px' }} title="SCP-JP Discord Chat" /></a>
                    </div>
                </div>
            </div>
            <div className="side-block" style={{ backgroundColor: '#f0f0f0' }}>
                <div style={{ textAlign: 'center' }}>
                    <p><span style={{ fontSize: '80%' }}>© SCP財団<br />
                        <a href="/credits">クレジット</a> | <a href="/licensing-guide">ライセンス</a> | <a href="/contact-staff">問い合わせ</a></span></p>
                </div>
            </div>
            <div className="scpnet-interwiki-wrapper interwiki-stylable">
                <div className="list-pages-box">
                    <div className="list-pages-item">
                        <p><iframe className="html-block-iframe scpnet-interwiki-frame" src="https://interwiki.scp-jp.org/interwikiFrame.html?lang=jp&community=scp&pagename=scp-173" style={{ height: "366.039px"}}></iframe></p>
                    </div>
                </div>
            </div>
            <p><iframe src="https://interwiki.scp-jp.org/styleFrame.html?priority=0&theme=https://scp-jp.github.io/files/theme/sigma-9/sigma-9.min.css" style={{ display: 'none' }}></iframe></p>
            <div style={{ clear: 'both', height: '0px', fontSize: '1px' }}></div><a className="close-menu" href="##"><br />
                <img alt="black.png" className="image" src="https://scp-jp.github.io/files/util/common/media/nav/side/black.png" style={{ zIndex: '-1', opacity: 0.3 }} /><br /></a>
        </>
    );
};

export default SideBar;
