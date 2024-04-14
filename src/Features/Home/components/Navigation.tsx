import useNavigation from '../../hooks/useNavigation';

const NavigationLink = ({ data }) => (
  <li>
    <a href={data.link} className="page-scroll">
      {data.title}
    </a>
  </li>
);

export default function Navigation() {
  const { data: navigation } = useNavigation();

  if (!navigation) return null;

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span>
            <span className="icon-bar"></span> <span className="icon-bar"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            {navigation
              ?.filter(item => item.isVisible)
              .map(item => <NavigationLink key={item.title} data={item} />)}
          </ul>
        </div>
      </div>
    </nav>
  );
}
