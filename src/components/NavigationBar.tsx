import { months } from '../data/months';
import { Month } from '../modules/Month';
import { Navigation } from '../modules/Navigation';

const nagivation = new Navigation(months as Month[]);
const links = nagivation.getNavLinks();

function NavigationBar(props: {open: boolean, setOpen: (value: boolean) => void}) {
  return (
      <div className={`side-bar ${props.open ? 'open' : ''}`}>
        <h4>Navigation</h4>
        {
          links.map(link => <details name={link.month.name} key={link.month.name}>
            <summary>{link.month.name}</summary>
            <ul>
              {
                link.links?.map(link => <li key={link?.label}><a href={link?.value} title={link?.label} onClick={() => props.setOpen(false)}>{link?.label}</a></li>)
              }
            </ul>
          </details>)
        }
      </div>
  );
}

export default NavigationBar;
