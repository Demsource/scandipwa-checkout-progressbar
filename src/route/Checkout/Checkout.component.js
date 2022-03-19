import Bar from "Component/Progressbar/Bar";
import Checkpoint from "Component/Progressbar/Checkpoint";
import { Checkout as SourceCheckout } from "SourceRoute/Checkout/Checkout.component";
import "./Checkout.extension.style";

export class Checkout extends SourceCheckout {
  renderProgressbar() {
    const keys = Object.keys(this.stepMap);
    const { checkoutStep } = this.props;

    let progressbar = [];

    keys.forEach((key, idx) => {
      const isReached = idx <= keys.indexOf(checkoutStep);
      const isPassed = idx < keys.indexOf(checkoutStep);

      progressbar.push(
        <div
          className="progress-step"
          style={{ width: 100 / keys.length + "%" }}
        >
          <Bar isReached={isReached} />
          {idx !== keys.length - 1 && (
            <Checkpoint
              isReached={isReached}
              isPassed={isPassed}
              stepCount={keys.indexOf(key) + 1}
              stepName={
                key[0] + key.slice(1).replace("_STEP", "").toLowerCase()
              }
            />
          )}
        </div>
      );
    });

    return <div className="progress-bar">{progressbar}</div>;
  }

  render() {
    return (
      <div className="CheckoutWrapper">
        {this.renderProgressbar()}
        {super.render()}
      </div>
    );
  }
}

export default Checkout;
