$(function() {
  if ($('form').length) {
    /*
    $('form [data-color]').each(function() {
      var that;
      that = this;
      return $(this).ColorPicker({
        color: $(that).val(),
        onShow: function(el) {
          $(el).fadeIn(500);
          return false;
        },
        onHide: function(el) {
          $(el).fadeOut(500);
          return false;
        },
        onChange: function(hsb, hex, rgb) {
          $(that).val(hex);
          return $(that).css('backgroundColor', '#' + hex);
        }
      });
    });
    $('form [data-datetimepicker]').each(function() {
      return $(this).datetimepicker($(this).data('options'));
    });
    $('form [data-enumeration]').each(function() {
      return $(this).filteringSelect($(this).data('options'));
    });
    $('form [data-fileupload]').each(function() {
      var input;
      input = this;
      return $(this).find(".delete input[type='checkbox']").live('click', function() {
        return $(input).children('.toggle').toggle('slow');
      });
    });
    */
    /*
    $('form [data-filteringmultiselect]').each(function() {
      $(this).filteringMultiselect($(this).data('options'));
      if ($(this).parents("#modal").length) {
        return $(this).parents('.control-group').find('.btn').remove();
      } else {
        return $(this).parents('.control-group').first().remoteForm();
      }
    });
*/
    $('form [data-filteringselect]').each(function() {
      $(this).filteringSelect($(this).data('options'));
      if ($(this).parents("#modal").length) {
        return $(this).parents('.control-group').find('.btn').remove();
      } else {
        return $(this).parents('.control-group').first().remoteForm();
      }
    });
    /*
    $('form [data-nestedmany]').each(function() {
      var content, field, nav, toggler;
      field = $(this).parents('.control-group').first();
      nav = field.find('> .controls > .nav');
      content = field.find('> .tab-content');
      toggler = field.find('> .controls > .btn-group > .toggler');
      content.children('.fields:not(.tab-pane)').addClass('tab-pane').each(function() {
        return nav.append('<li><a data-toggle="tab" href="#' + this.id + '">' + $(this).children('.object-infos').data('object-label') + '</a></li>');
      });
      nav.find("> li > a[data-toggle='tab']:first").tab('show');
      if (nav.children().length === 0) {
        nav.hide();
        content.hide();
        return toggler.addClass('disabled').removeClass('active').children('i').addClass('icon-chevron-right');
      } else {
        if (toggler.hasClass('active')) {
          nav.show();
          content.show();
          return toggler.children('i').addClass('icon-chevron-down');
        } else {
          nav.hide();
          content.hide();
          return toggler.children('i').addClass('icon-chevron-right');
        }
      }
    });
    $('form [data-nestedone]').each(function() {
      var content, field, first_tab, nav, toggler;
      field = $(this).parents('.control-group').first();
      nav = field.find("> .controls > .nav");
      content = field.find("> .tab-content");
      toggler = field.find('> .controls > .toggler');
      content.children(".fields:not(.tab-pane)").addClass('tab-pane').each(function() {
        return nav.append('<li><a data-toggle="tab" href="#' + this.id + '">' + $(this).children('.object-infos').data('object-label') + '</a></li>');
      });
      first_tab = nav.find("> li > a[data-toggle='tab']:first");
      first_tab.tab('show');
      field.find("> .controls > [data-target]:first").html('<i class="icon-white"></i> ' + first_tab.html());
      if (toggler.hasClass('active')) {
        toggler.children('i').addClass('icon-chevron-down');
        return content.show();
      } else {
        toggler.children('i').addClass('icon-chevron-right');
        return content.hide();
      }
    });
    $('form [data-polymorphic]').each(function() {
      var field, object_select, type_select, urls;
      type_select = $(this);
      field = type_select.parents('.control-group').first();
      object_select = field.find('select').last();
      urls = type_select.data('urls');
      return type_select.on('change', function(e) {
        if ($(this).val() === '') {
          return object_select.html('<option value=""></option>');
        } else {
          return $.ajax({
            url: urls[type_select.val()],
            data: {
              compact: true,
              all: true
            },
            beforeSend: function(xhr) {
              return xhr.setRequestHeader("Accept", "application/json");
            },
            success: function(data, status, xhr) {
              var html;
              html = '<option></option>';
              $(data).each(function(i, el) {
                return html += '<option value="' + el.id + '">' + el.label + '</option>';
              });
              return object_select.html(html);
            }
          });
        }
      });
    });
    return $('form [data-richtext=ckeditor]').not('.ckeditored').each(function() {
      var instance, options;
      window.CKEDITOR_BASEPATH = '/assets/ckeditor/';
      options = $(this).data('options');
      if (!window.CKEDITOR) {
        $(window.document).append('<script src="' + options['jspath'] + '"><\/script>');
      }
      if (instance = window.CKEDITOR.instances[this.id]) {
        instance.destroy(true);
      }
      window.CKEDITOR.replace(this, options['options']);
      return $(this).addClass('ckeditored');
    });
    */
  }
});