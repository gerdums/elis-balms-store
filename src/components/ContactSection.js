import React from 'react';
import _ from 'lodash';

import {withPrefix, Link} from '../utils';

export default class ContactSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section className="content__row content__row--full-width contact__section" data-id={_.get(section, 'section_id', null)}>
              {_.get(section, 'image', null) && (<img src={withPrefix(_.get(section, 'image', null))} alt="" className="contact__image"/>)}
              <div className="contact__text-container">
                <h3 className="contact__title">Have any questions? <br/> Contact us.</h3>
                <div className="contact__info-container">
                  <p className="contact__address">{_.get(section, 'address', null)}</p>
                  <p className="contact__telephone">{_.get(section, 'phone', null)}</p>
                  <p className="contact__email">{_.get(section, 'email', null)}</p>
                  <div className="contact__separator" />
                  {_.get(section, 'mapUrl', null) && (
                  
                  )}
                </div>
              </div>
            </section>
        );
    }
}
