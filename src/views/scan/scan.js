import React , {Component} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Sidebar from './Sidebar';
import QrReader from 'react-qr-reader';


class Scan extends Component {
  constructor(props) {
    super(props);
    this.state = { result: "sin resultados" }
  }

  description(){
    return (
      <div>
          <QrReader
            delay={20000}
            onError={() => this.handleError()}
            onScan={(e) => this.handleScan(e)}
            style={{ width: '100%' }}
          />
          <p>{this.state.result}</p>
      </div>
    )
  }

  handleScan(data){
    if (data != '') {
      this.props.history.push({
        pathname: './blog',
        });
        //window.location.href = data;
    }
  }

  handleError(err){
      console.error(err)
  }

  render() {
    return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <Grid container spacing={5} >
            <Sidebar
              title="Escanear QR"
              description={this.description()}
            />
          </Grid>
        </main>
      </Container>
    </React.Fragment>
    );
  }
}
export default Scan;