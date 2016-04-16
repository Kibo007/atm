import './atm-card.scss'

export default angular
  .module('app.card', [])
  .directive('atmCard', () => ({
    restrict: 'E',
    scope: {
      insertCard: '&',
      cardMounted: '='
    },
    template: `
    <div class="AtmCard">
      <!-- card slot start -->
      <div class="AtmCard-slot"></div>
      <!-- card slot end -->

      <!-- card start -->
      <div class="AtmCard-cardWrapper" layout="row" layout-align="center end">
        <div class="AtmCard-card"
             ng-click="insertCard()"
             ng-class="{cardInserted: cardMounted, cardEject: !cardMounted}">
        </div>
      </div>
      <!-- card end -->
      <span ng-show="!cardMounted" class="AtmCard-message">click on card</span>

    </div>
    `,
  }))
  .name;
