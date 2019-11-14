import React from 'react';
import { Panel, PanelBody, PanelFooter, PanelHeader ,TeamsThemeContext,PrimaryButton} from 'msteams-ui-components-react';
import {Table,TBody,Tr,Th,Td} from 'msteams-ui-components-react';
import {style} from "typestyle";
import './table.styles.scss'
import { MSTeamsIcon, MSTeamsIconType, MSTeamsIconWeight } from 'msteams-ui-icons-react';
interface Props {}

interface State {
  data: { one: number, two: number, three: number }[],
  color:['#d69cb5','#d7edd9','#d5ddf7']
};
class TableExample extends React.Component<Props, State> {
  constructor(props:any) {
    super(props);
    this.state = {
      data: [{one: 1,two: 2,three: 3},{one: 1,two: 2,three: 3},{one: 1,two: 2,three: 3},{one: 1,two: 2,three: 3}],
      color:['#d69cb5','#d7edd9','#d5ddf7']
    };
  }

  // <MSTeamsIcon
  // iconType={MSTeamsIconType.AlertOff}
  // iconWeight={MSTeamsIconWeight.Light} /> 
  

  render() {
    return <TeamsThemeContext.Consumer>
      {(context) => {
        const { rem, font } = context;
        const { sizes, weights } = font;

        const styles = {
          header: {...sizes.title, ...weights.semibold},
          section: {...sizes.title2, marginTop: rem(1.4), marginBottom: rem(1.4)},
        }

        return <Panel>
          <PanelHeader>
            <div style={styles.header}>Tables</div>
          </PanelHeader>
          <PanelBody>
            <div style={styles.section}>Single Column</div>
            <Table>
              <TBody>
                <Tr><Th>col1</Th></Tr>
                <Tr><Td>a</Td></Tr>
                <Tr><Td>1</Td></Tr>
              </TBody>
            </Table>
            <div style={styles.section}>Multiple Columns</div>
            <Table className='calls-table'>
              <TBody>
              <Tr><Th>Name</Th><Th >Type</Th><Th >Duration</Th><Th >Date</Th></Tr>
                {
                  this.state.data.map((item,index) => ( 
                    <Tr><Td> <span style={{backgroundColor:this.state.color[index]}} className='name-icon'>dsf</span>                
                    {item.one}</Td><Td>{item.two}</Td> <Td>{item.three}</Td><Td>{item.three}</Td></Tr>
                  ))
                }
                {/* <Tr ><Th>col1</Th><Th style={{flex: `0 0 ${rem(3.8)}`}}>col2</Th></Tr>
                <Tr><Td>a</Td><Td style={{flex: `0 0 ${rem(3.8)}`, textAlign: 'center'}}>b</Td></Tr>
                <Tr><Td>1</Td><Td style={{flex: `0 0 ${rem(3.8)}`, textAlign: 'center'}}>2</Td></Tr> */}
              </TBody>
            </Table>
          </PanelBody>
          <PanelFooter>
          </PanelFooter>
        </Panel>;
      }}
    </TeamsThemeContext.Consumer>
  }
}

export default TableExample;
