import { Helmet } from 'react-helmet-async';

import { Link } from '@src/components/ui/link';

export const LandingRoute = () => {
  return (
    <>
      <Helmet>
        <title>BoilerPlate</title>
        <meta
          name="description"
          content="Streamlined bulletproof-react boilerplate"
        />
      </Helmet>
      <div className="flex h-screen w-screen items-center justify-center">
        <article className="prose lg:prose-xl">
          <h1>Loomings</h1>

          <p>
            Call me Ishmael. Some years ago—never mind how long precisely—having
            little or no money in my purse, and nothing particular to interest
            me on shore, I thought I would sail about a little and see the
            watery part of the world. It is a way I have of driving off the
            spleen and regulating the circulation. Whenever I find myself
            growing grim about the mouth; whenever it is a damp, drizzly
            November in my soul; whenever I find myself involuntarily pausing
            before coffin warehouses, and bringing up the rear of every funeral
            I meet; and especially whenever my hypos get such an upper hand of
            me, that it requires a strong moral principle to prevent me from
            deliberately stepping into the street, and methodically knocking
            people’s hats off—then, I account it high time tozz get to sea as
            soon as I can. This is my substitute for pistol and ball. With a
            philosophical flourish Cato throws himself upon his sword; I quietly
            take to the ship. There is nothing surprising in this. If they but
            knew it, almost all men in their degree, some time or other, cherish
            very nearly the same feelings towards the ocean with me.
          </p>
          <Link to="/404" replace>
            Go to 404
          </Link>
        </article>
      </div>
    </>
  );
};
