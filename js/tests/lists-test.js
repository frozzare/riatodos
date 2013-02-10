define([
  'jquery',
  'underscore',
  'backbone',
  'collections/lists'
], function ($, _, Backbone, Lists) {
  module('ListCollection');

  test('Empty ListCollcetion', function () {
    equal(Lists.length, 0, 'Should be empty');
  });

  test('Should contains lists with titles', function () {
    Lists.create({ title: 'Open Source' });
    equal(Lists.length, 1, 'Should contain one list');
    equal(Lists.first().get('title'), 'Open Source', 'Should equal the title');
    Lists.create({ title: 'JavaScript' });
    equal(Lists.length, 2, 'Should contain two lists');
    equal(Lists.last().get('title'), 'JavaScript', 'Should equal the title');
  });
});