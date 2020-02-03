var attributes = {"doc":["- Specifies documentation.","https://doc.rust-lang.org/rustdoc/the-doc-attribute.html"],"features":["- Used to enable unstable or experimental compiler features.","https://doc.rust-lang.org/unstable-book/index.html"],"cfg":[" — Controls conditional compilation.","https://doc.rust-lang.org/reference/conditional-compilation.html#the-cfg-attribute"],"cfg_attr":[" — Conditionally includes attributes.","https://doc.rust-lang.org/reference/conditional-compilation.html#the-cfg_attr-attribute"],"test":[" — Marks a function as a test.","https://doc.rust-lang.org/reference/attributes/testing.html#the-test-attribute"],"ignore":[" — Disables a test function.","https://doc.rust-lang.org/reference/attributes/testing.html#the-ignore-attribute"],"should_panic":[" — Indicates a test should generate a panic.","https://doc.rust-lang.org/reference/attributes/testing.html#the-should_panic-attribute"],"derive":[" — Automatic trait implementations.","https://doc.rust-lang.org/reference/attributes/derive.html"],"macro_export":[" — Exports a macro_rules macro for cross-crate usage.","https://doc.rust-lang.org/reference/macros-by-example.html#path-based-scope"],"macro_use":[" — Expands macro visibility, or imports macros from other\ncrates.","https://doc.rust-lang.org/reference/macros-by-example.html#the-macro_use-attribute"],"proc_macro":[" — Defines a function-like macro.","https://doc.rust-lang.org/reference/procedural-macros.html#function-like-procedural-macros"],"proc_macro_derive":[" — Defines a derive macro.","https://doc.rust-lang.org/reference/procedural-macros.html#derive-macros"],"proc_macro_attribute":[" — Defines an attribute macro.","https://doc.rust-lang.org/reference/procedural-macros.html#attribute-macros"],"allow":[" — Alters the default lint level.","https://doc.rust-lang.org/reference/attributes/diagnostics.html#lint-check-attributes"],"warn":[" — Alters the default lint level.","https://doc.rust-lang.org/reference/attributes/diagnostics.html#lint-check-attributes"],"deny":[" — Alters the default lint level.","https://doc.rust-lang.org/reference/attributes/diagnostics.html#lint-check-attributes"],"forbid":[" — Alters the default lint level.","https://doc.rust-lang.org/reference/attributes/diagnostics.html#lint-check-attributes"],"deprecated":[" — Generates deprecation notices.","https://doc.rust-lang.org/reference/attributes/diagnostics.html#the-deprecated-attribute"],"must_use":[" — Generates a lint for unused values.","https://doc.rust-lang.org/reference/attributes/diagnostics.html#the-must_use-attribute"],"link":[" — Specifies a native library to link with an extern block.","https://doc.rust-lang.org/reference/items/external-blocks.html#the-link-attribute"],"link_name":[" — Specifies the name of the symbol for functions or statics\nin an extern block.","https://doc.rust-lang.org/reference/items/external-blocks.html#the-link_name-attribute"],"no_link":[" — Prevents linking an extern crate.","https://doc.rust-lang.org/reference/items/extern-crates.html#the-no_link-attribute"],"repr":[" — Controls type layout.","https://doc.rust-lang.org/reference/type-layout.html#representations"],"crate_type":[" — Specifies the type of crate (library, executable, etc.).","https://doc.rust-lang.org/reference/linkage.html"],"no_main":[" — Disables emitting the main symbol.","https://doc.rust-lang.org/reference/crates-and-source-files.html#the-no_main-attribute"],"export_name":[" — Specifies the exported symbol name for a function or\nstatic.","https://doc.rust-lang.org/reference/abi.html#the-export_name-attribute"],"link_section":[" — Specifies the section of an object file to use for a\nfunction or static.","https://doc.rust-lang.org/reference/abi.html#the-link_section-attribute"],"no_mangle":[" — Disables symbol name encoding.","https://doc.rust-lang.org/reference/abi.html#the-no_mangle-attribute"],"used":[" — Forces the compiler to keep a static item in the output\nobject file.","https://doc.rust-lang.org/reference/abi.html#the-used-attribute"],"crate_name":[" — Specifies the crate name.","https://doc.rust-lang.org/reference/crates-and-source-files.html#the-crate_name-attribute"],"inline":[" — Hint to inline code.","https://doc.rust-lang.org/reference/attributes/codegen.html#the-inline-attribute"],"cold":[" — Hint that a function is unlikely to be called.","https://doc.rust-lang.org/reference/attributes/codegen.html#the-cold-attribute"],"no_builtins":[" — Disables use of certain built-in functions.","https://doc.rust-lang.org/reference/attributes/codegen.html#the-no_builtins-attribute"],"target_feature":[" — Configure platform-specific code generation.","https://doc.rust-lang.org/reference/attributes/codegen.html#the-target_feature-attribute"],"no_std":[" — Removes std from the prelude.","https://doc.rust-lang.org/reference/crates-and-source-files.html#preludes-and-no_std"],"no_implicit_prelude":[" — Disables prelude lookups within a module.","https://doc.rust-lang.org/reference/items/modules.html#prelude-items"],"path":[" — Specifies the filename for a module.","https://doc.rust-lang.org/reference/items/modules.html#the-path-attribute"],"recursion_limit":[" — Sets the maximum recursion limit for certain\ncompile-time operations.","https://doc.rust-lang.org/reference/attributes/limits.html#the-recursion_limit-attribute"],"type_length_limit":[" — Sets the maximum size of a polymorphic type.","https://doc.rust-lang.org/reference/attributes/limits.html#the-type_length_limit-attribute"],"panic_handler":[" — Sets the function to handle panics.","https://doc.rust-lang.org/reference/runtime.html#the-panic_handler-attribute"],"global_allocator":[" — Sets the global memory allocator.","https://doc.rust-lang.org/reference/runtime.html#the-global_allocator-attribute"],"windows_subsystem":[" — Specifies the windows subsystem to link with.","https://doc.rust-lang.org/reference/runtime.html#the-windows_subsystem-attribute"],"non_exhaustive":[" — Indicate that a type will have more fields/variants\nadded in future.","https://doc.rust-lang.org/reference/attributes/type_system.html#the-non_exhaustive-attribute"]};

function AttributeSearch() {
    this.attributes = Object.keys(attributes);
    this.attributes.sort();
}

AttributeSearch.prototype.search = function(keyword) {
    keyword = keyword.replace(/[-_\s#]/ig, "");
    let result = [];

    for (let rawAttribute of this.attributes) {
        let attribute = rawAttribute.replace(/[-_\s#]/ig, "");
        if (attribute.length < keyword.length) continue;

        let index = attribute.indexOf(keyword);
        if (index > -1) {
            result.push({
                attribute: rawAttribute,
                matchIndex: index,
            });
        }
    }
    // Sort the result, the lower matchIndex, the shorter length, the higher rank.
    return result.sort((a, b) => {
        if (a.matchIndex === b.matchIndex) {
            return a.attribute.length - b.attribute.length;
        }
        return a.matchIndex - b.matchIndex;
    })
        .map(item => {
            let [description, href] = attributes[item.attribute];
            return {
                name: item.attribute,
                description: description,
                href: href,
            }
        });
};