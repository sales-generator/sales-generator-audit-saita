import React from 'react';
import { Component } from 'react';
import SeoBlock from './SeoBlock.js';
import YouSiteAudit from './YouSiteAudit';
import IncludeAudit from './IncludeAudit';
import Results from './Results';
import Proposition from './Proposition';

class Main extends Component{
    render() {
        return(
           <main className="main">
               <YouSiteAudit/>
               <SeoBlock/>
               <IncludeAudit/>
               <Results/>
               <Proposition/>
           </main>
        )
    };
}

export default Main;

