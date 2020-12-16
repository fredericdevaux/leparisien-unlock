import React from "react";
import "./App.scss";

export class App extends React.Component<{}, { unlock: Boolean }> {
  state = {unlock: false}

  constructor(props: any) {
    super(props);
    this.setState({ unlock: false });
  }

  render() {
      let button;
      if (this.state.unlock) {
        button = <button disabled={true}>Article débloqué !</button>;
      } else {
        button = <button onClick={this.unlockArticle}>Débloquer l'article</button>;
      }
      return <div className="app">{button}</div>;
  }

  unlockArticle = () => {
    if (chrome && chrome.tabs) {
      chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
        const tab = tabs[0];
        chrome.tabs.sendMessage(tab.id || 0, { from: "popup", subject: "unlockArticle" }, response => {
          this.setState({ unlock: true });
        });
      });
    }
  }
}

export default App;
