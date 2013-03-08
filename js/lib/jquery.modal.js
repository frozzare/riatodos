/**
 * Simple modal window, require some css.
 */

(function ($) {
  
  /**
   * Initalize modal.
   *
   * @param {Object} element
   */
  
  var Modal = function (element) {
    this.element = $(element);
    this.open = false;
  };
  
  /**
   * Toggle show/hide.
   */
   
  Modal.prototype.toggle = function () {
    return this[!this.open ? 'show' : 'hide'];
  };
  
  /**
   * Show modal.
   */
  
  Modal.prototype.show = function () {
    if (this.open) return;

    this.open = true;
    
    this.backdrop(function () {
      this.element.show().addClass('modal-open');
    });
    
  };
  
  /**
   * Hide modal.
   */
  
  Modal.prototype.hide = function () {
    if (!this.open) return;
    
    this.open = false;
    
    this.backdrop(function () {
      this.element.hide().removeClass('modal-open');
    });
  };
  
  /**
   * Create mask layer.
   */
  
  Modal.prototype.backdrop = function (callback) {
    var backdrop = $('<div class="modal-backdrop" />')
      , item = $('.modal-backdrop');
      
    if (!item.length) {
      $(document.body).append(backdrop);
    } else {
      item.remove();
    }
    
    if (typeof callback === 'function') {
      callback.call(this);
    }
  };
  
  /**
   * Store Modal instance in jQuery `data` or a the window object for tire.
   *
   * @param {Object} element
   */
  
  function modalStore (element) {
    element = $(element);
    if (element.data) {
      var modal = element.data('modal');
      if (!modal) element.data('modal', (modal = new Modal(element)));
      return modal;
    } else {
      var key = element.attr('data-modal') === null ? 'modal-' + (+new Date()) : element.attr('data-modal');
      element.attr('data-modal', key);
      window.modals = window.modals || {};
      return window.modals[key] === undefined ? (window.modals[key] = new Modal(element)) : window.modals[key];
    }
  }
  
  /**
   * Create jQuery plugin
   */
  
  $.fn.modal = function (action) {
    return this.each(function () {
      var modal = modalStore(this);
      if (typeof action === 'string') modal[action]();
    });
  };
  
}(window.jQuery || window.tire));