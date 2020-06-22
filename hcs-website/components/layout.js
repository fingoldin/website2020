import Head from 'next/head';
import Link from 'next/link';
import styles from './layout.module.css';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: true,
      links: [
        { href: "/", title: "Home" },
        { href: "/about-us", title: "About", right: true, subitems: [
          { href: "/about", title: "About us" },
          { href: "/faq", title: "FAQ" },
          { href: "/sponsors", title: "Sponsors" },
          { href: "/csharvard", title: "CS@Harvard" },
          ]
        },
        { href: "/get-involved", title: "Get Involved", right:true, subitems: [
          { href: "/comp", title: "Comp"},
          { href: "/bip", title: "BIP"}
          ]
        },
        { href: "/contact", title: "Contact", right:true, subitems: [
          {href: "/people", title: "HCS Board"},
          {href: "/tech", title: "HCS Tech"}
        ]}
      ]
    };
    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  renderNavSubitems = (link, index) => {
    console.log(link);
    return [
      <div key={"expand"} className={styles.expandItem} onClick={() => {this.toggleItem(index)} }>
        <img width={30} height={30} src={link.expanded ? "/chevron-up-outline.svg" : "/chevron-down-outline.svg"}></img>
      </div>,
      <ul key={"list"} className={styles.navSubList + (link.expanded ? styles.expanded : "")}>
        {link.subitems.map((item, index) =>
          <li key={"subitem" + index} className={styles.navListSubLi}>
            <Link href={item.href}>
              <a className={styles.navSubListA}>{item.title}</a>
            </Link>
          </li>
        )}
      </ul>
    ];
  }

  toggleItem(index) {
    this.state.links[index].expanded = !!!this.state.links[index].expanded;
    this.setState({
      links: this.state.links
    });
  }

  renderNavItem = (link, index) => {
    return (
      <li
        key={"item" + index}
        className={styles.navListLi +
          (link.right ? (" " + styles.navListLiRight) : "") + " " +
          (!this.state.collapsed ? styles.open : "")
        }
      >
        <Link href={link.href}>
          <a className={styles.navListA}>{link.title}</a>
        </Link>
        {(link.subitems) ? this.renderNavSubitems(link, index) : null}
      </li>
    );
  }

  toggleCollapse() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div className={styles.main}>
        <Head>
          <title>Harvard Computer Society</title>
          <link rel="icon" href="/hcslogo.png" />
        </Head>
        <div className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navImage}>
              <Link href="/">
                <a><img width={50} height={50} src="/hcslogo2.png"></img></a>
              </Link>
            </li>
            <li className={styles.navListCollapse} onClick={this.toggleCollapse}>
              <img width={40} height={40} src={this.state.collapsed ? "/menu-outline.svg" : "/close-outline.svg"}></img>
            </li>
            {this.state.links.map(this.renderNavItem)}
          </ul>
        </div>
        {this.props.children}
        <div className={styles.footer}>
          &copy; Harvard Computer Society 2020.
        </div>
      </div>
    );
  }

}
