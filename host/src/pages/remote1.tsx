import Button from 'remote1/button';
import { registerRemotes } from '@module-federation/enhanced/runtime';

function Remote1() {
  const registerNewVersion = () => {
    // Ist time "err =>
    //[ Federation Runtime ]:The remote "remote1" is already registered. If you want to merge the remote, you can set "force: true"."
    // registerRemotes([
    //   {
    //     name: 'remote1',
    //     entry: 'http://localhost:3001/mf-manifest.json?v=0.0.2',
    //   },
    // ]);

    // 2nd timw with  force option.
    registerRemotes(
      [
        {
          name: 'remote1',
          //   version: '0.0.2', //tried with this fied as well
          entry: 'http://localhost:3001/mf-manifest.json?v=0.0.2',
        },
      ],
      { force: true },
    );
  };

  return (
    <div>
      <h2>Remote1 Router</h2>
      <Button />
      <br />
      <button onClick={registerNewVersion}>Register new version</button>
    </div>
  );
}

export default Remote1;
