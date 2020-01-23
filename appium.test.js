import wd from 'wd';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
const PORT = 4723;
const config = {
    platformName: 'Android',
    platformVersion: '10',
    deviceName: 'Pixel',
    appPackage: 'com.taskworld.enterprise.Cordoworld',
    appActivity: 'com.taskworld.enterprise.Cordoworld.MainActivity',
};
const driver = wd.promiseChainRemote('localhost', PORT);

beforeAll(async () => {
    await driver.init(config);
    await driver.sleep(20000); // wait for app to load
});

test('Check whether the error message shows up when there is no network connection on login page.', async () => {
    let emailId = await driver.elementByXPath(
        '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[3]/android.view.View/android.view.View/android.widget.EditText'
    );
    await emailId.click();
    await emailId.type('testertester541@gmail.com');
    let password = await driver.elementByXPath('//*[@text="Password"]');
    await password.type('Tester@1234567890');
    await driver.elementByXPath('//*[@text="Log In"]').click();
    await driver.elementByXPath(
        '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[1]/android.view.View'
    );
});
