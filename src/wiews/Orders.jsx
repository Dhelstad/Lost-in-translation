import TranslationOutput from "../components/Orders/TranslationOutput";
import OrderForm from "../components/Orders/OrderForm";
import withAuth from "../hoc/withAuth";

const Translation = () => {
  return (
    <>
      <div className="container">
        <section id="translation-text" className="OrderForm">
          <OrderForm />
        </section>
        <section id="translation-letters" className="translationOutput">
          <TranslationOutput />
        </section>
      </div>
    </>
  );
};
export default withAuth(Translation);
