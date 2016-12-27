import { TravelGuideAngularPage } from './app.po';

describe('travel-guide-angular App', function() {
  let page: TravelGuideAngularPage;

  beforeEach(() => {
    page = new TravelGuideAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
